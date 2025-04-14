import { AuthRepositoryImpl } from "@/app/data/repositories/AuthRepositoryImpl"
import { SignInResInterface, SignUpResInterface } from "@/app/domain/entities/User"
import { signInUseCase, signUpUseCase } from "@/app/domain/usecases/authUseCase"
import { useSession } from "@/context/ctx";
import { setStorageItemAsync } from "@/context/useStorageState";

export const useAuthViewModel = () => {// view model ini -> langsung di run pada screen;
    const { signInState } = useSession();

    const fetchLogin = async (username: string, password: string): Promise<SignInResInterface> => {
        return await signInUseCase(AuthRepositoryImpl, setStorageItemAsync, signInState, username, password)
    };

    const fetchSignup = async (email: string, username: string, password: string, role: string): Promise<SignUpResInterface> => {
        return await signUpUseCase(AuthRepositoryImpl, email, username, password, role)
    };

    return {
        fetchLogin,
        fetchSignup
    }
}