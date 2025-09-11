import { useState, useEffect, useCallback } from 'react';
import { apiFetch, setToken, clearToken, getToken } from '../lib/api';

export const useWallet = () => {
  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  // Check if MetaMask is installed and existing connection/token
  useEffect(() => {
    const hasEthereum = typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
    setIsMetaMaskInstalled(hasEthereum);

    if (hasEthereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        })
        .catch(console.error);

      const token = getToken();
      if (token) {
        // Optionally validate token with backend
        apiFetch('/api/auth/protected').catch(() => {
          // invalid token -> clear
          clearToken();
        });
      }

      // Listen for account changes
      const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
          setAccount(null);
        } else {
          setAccount(accounts[0]);
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        try {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        } catch {}
      };
    }
  }, []);

  const connectWallet = useCallback(async () => {
    if (!isMetaMaskInstalled) {
      setError('MetaMask is not installed. Please install MetaMask to continue.');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      if (accounts.length > 0) {
        const addr = accounts[0];
        setAccount(addr);

        // Create a message and request a signature for backend authentication
        const message = `Vaultify authentication ${new Date().toISOString()}`;

        let signature;
        try {
          signature = await window.ethereum.request({
            method: 'personal_sign',
            params: [message, addr],
          });
        } catch (err) {
          // some providers expect params order [msg, address]
          signature = err && err.code ? null : null;
        }

        if (signature) {
          try {
            const res = await apiFetch('/api/auth/register', {
              method: 'POST',
              body: { address: addr, message, signature },
            });

            if (res && res.token) {
              setToken(res.token);
            }
          } catch (err) {
            // don't fail connection if backend auth fails
            console.error('Backend auth failed', err);
            setError(err.message || 'Backend authentication failed');
          }
        }

        setError(null);
      }
    } catch (err) {
      if (err.code === 4001) {
        setError('Connection rejected by user');
      } else {
        setError(`Failed to connect: ${err.message}`);
      }
    } finally {
      setIsConnecting(false);
    }
  }, [isMetaMaskInstalled]);

  const disconnectWallet = useCallback(() => {
    setAccount(null);
    setError(null);
    clearToken();
  }, []);

  const formatAddress = useCallback((address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, []);

  return {
    account,
    isConnecting,
    error,
    isMetaMaskInstalled,
    isConnected: !!account,
    connectWallet,
    disconnectWallet,
    formatAddress
  };
};
