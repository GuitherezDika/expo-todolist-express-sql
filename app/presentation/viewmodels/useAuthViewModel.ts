import { AuthRepositoryImpl } from "@/app/data/repositories/AuthRepositoryImpl"
import { SignInResInterface, SignUpResInterface } from "@/app/domain/entities/User"
import { signInUseCase, signUpUseCase } from "@/app/domain/usecases/authUseCase"
import { AuthSignupParam } from "@/app/globalInterface";
import { useSession } from "@/context/ctx";
import { setStorageItemAsync } from "@/context/useStorageState";

export const useAuthViewModel = () => {// view model ini -> langsung di run pada screen;
    const { signInState } = useSession();

    const fetchLogin = async (username: string, password: string): Promise<SignInResInterface> => {
        return await signInUseCase(
            AuthRepositoryImpl, // api model and responds
            setStorageItemAsync, // save file into local storage
            signInState, // update login context
            username,
            password
        )
    };

    const fetchSignup = async (signupParam: AuthSignupParam): Promise<SignUpResInterface> => {
        return await signUpUseCase(
            AuthRepositoryImpl, 
            signupParam
        )
    };

    return {
        fetchLogin,
        fetchSignup
    }
}