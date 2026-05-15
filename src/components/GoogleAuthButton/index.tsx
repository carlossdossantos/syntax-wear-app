import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useNavigate } from "@tanstack/react-router";
import { type CredentialResponse, useGoogleOAuth } from "@react-oauth/google";

let googleIdInitialized = false;

export const GoogleAuthButton = () => {
  const [googleError, setGoogleError] = useState<string | null>(null);
  const [, setIsLoadingGoogle] = useState<boolean>(false);
  const btnContainerRef = useRef<HTMLDivElement | null>(null);

  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { clientId, scriptLoadedSuccessfully } = useGoogleOAuth();

  const handleGoogleSuccessRef = useRef<
    ((credentialResponse: CredentialResponse) => Promise<void>) | undefined
  >(undefined);
  const handleGoogleErrorRef = useRef<(() => void) | undefined>(undefined);

  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse,
  ): Promise<void> => {
    const credential = credentialResponse.credential;
    //console.log(credential);

    if (!credential) {
      setGoogleError("Credencial do Google não encontrada. Tente novamente.");
      setIsLoadingGoogle(false);
      return;
    }

    setIsLoadingGoogle(true);
    setGoogleError(null);

    try {
      await signInWithGoogle(credential);
      navigate({ to: "/" });
    } catch (error) {
      let errorMessage = "Erro ao fazer login com Google. Tente novamente.";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setGoogleError(errorMessage);
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  const handleGoogleError = (): void => {
    setGoogleError("Erro ao autenticar com o Google. Tente novamente.");
    setIsLoadingGoogle(false);
  };

  useEffect(() => {
    handleGoogleSuccessRef.current = handleGoogleSuccess;
    handleGoogleErrorRef.current = handleGoogleError;
  }, [handleGoogleSuccess, handleGoogleError]);

  useEffect(() => {
    if (!scriptLoadedSuccessfully || !btnContainerRef.current || !clientId) {
      return;
    }

    const google = (window as any).google;

    if (!google?.accounts?.id) {
      setGoogleError("Erro ao carregar o login do Google. Tente novamente.");
      return;
    }

    if (!googleIdInitialized) {
      google.accounts.id.initialize({
        client_id: clientId,
        callback: async (credentialResponse: CredentialResponse) => {
          if (!credentialResponse?.credential) {
            handleGoogleErrorRef.current?.();
            return;
          }

          try {
            await handleGoogleSuccessRef.current?.(credentialResponse);
          } catch {
            handleGoogleErrorRef.current?.();
          }
        },
      });
      googleIdInitialized = true;
    }

    google.accounts.id.renderButton(btnContainerRef.current, {
      theme: "outline",
      size: "large",
      type: "standard",
      shape: "rectangular",
      text: "signin_with",
      logo_alignment: "left",
      width: 240,
    });

    return () => {
      google.accounts.id.cancel?.();
    };
  }, [clientId, scriptLoadedSuccessfully]);

  return (
    <>
      <div ref={btnContainerRef} className="flex justify-center" />

      {googleError && (
        <p className="mt-3.5 text-red-600 text-center">{googleError}</p>
      )}
    </>
  );
};
