import { AuthRepositoryImpl } from "@/app/data/repositories/AuthRepositoryImpl"
import { signInUseCase, signoutUseCase, signUpUseCase } from "@/app/domain/usecases/authUseCase"
import { AuthSigninParam, AuthSignInResponse, AuthSignoutParam, AuthSignoutResponse, AuthSignupParam, AuthSignUpResponse } from "@/app/globalInterface";
import { useSession } from "@/context/ctx";
import { setStorageItemAsync } from "@/context/useStorageState";

export const useAuthViewModel = () => {// view model ini -> langsung di run pada screen;
    const { signInState } = useSession();

    const fetchLogin = async (body: AuthSigninParam): Promise<AuthSignInResponse> => {
        return await signInUseCase(
            AuthRepositoryImpl, // api model and responds
            setStorageItemAsync, // save file into local storage
            signInState, // update login context
            body
        )
    };

    const fetchSignup = async (signupParam: AuthSignupParam): Promise<AuthSignUpResponse> => {
        return await signUpUseCase(
            AuthRepositoryImpl, 
            signupParam
        )
    };

    const fetchSignout = async (signoutParam: AuthSignoutParam): Promise<AuthSignoutResponse> => {
        return await signoutUseCase(
            AuthRepositoryImpl,
            signoutParam
        )
    }

    return {
        fetchLogin,
        fetchSignup,
        fetchSignout
    }
}