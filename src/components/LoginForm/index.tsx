import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const LoginForm  = () => {

    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { signIn } = useAuth();

    const navigate = useNavigate();

    const signInFormSchema = z.object({
        email: z.email('E-mail inválido'),
        password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    });

    type SigInFormData = z.infer<typeof signInFormSchema>;

    const {register, handleSubmit, formState: {errors}} = useForm<SigInFormData>({
        resolver: zodResolver(signInFormSchema),
    });

    const onSubmit = async (data: SigInFormData) => {
        setIsSubmitting(true);
        
        // settimeout para desabilitar o botão enquanto
        // a requisição está em andamento
        await new Promise((resolve) => setTimeout(resolve, 2000));

        try {
            // aqui você pode chamar a função de login do contexto de autenticação
            await signIn(data);
            navigate({to: "/"});
        } catch (error) {

            if(error instanceof Error){
                setError(error.message);
            } else {
                setError("Erro desconhecido ao fazer login");
            }
        } finally {
            setIsSubmitting(false);
        }       
    }


    return (
        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit(onSubmit)}>
            <input className="border rounded-[1px] border-gray-200 w-full text-black p-3" type="email" placeholder="E-mail" {...register("email")} />

            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            
            <input className="border rounded-[1px] border-gray-200 w-full text-black p-3" type="password" placeholder="Senha" {...register("password")} />

            {errors.password && <span className="text-red-500">{errors.password.message}</span> }

            {error && <span className="text-red-500 text-sm text-center">{error}</span>}


            <button type="submit" disabled={isSubmitting} className="bg-[#212A2F] w-full p-3.5 rounded-[1px] cursor-pointer text-white disabled:opacity-60 disabled:cursor-not-allowed">{isSubmitting ? "Enviando ..." : "Continuar"}</button>
        </form>
    )
}