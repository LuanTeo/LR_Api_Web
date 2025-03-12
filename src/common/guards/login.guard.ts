/* eslint-disable prettier/prettier */
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/modules/auth/auth.service'; // Importe o AuthService

@Injectable()
export class LoginGuard extends AuthGuard('local') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { email, password } = request.body;

    // Valida as credenciais no banco de dados
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Adiciona o usuário autenticado à requisição
    request.user = user;

    // Chama o método canActivate do AuthGuard para continuar o fluxo de autenticação
    return super.canActivate(context) as boolean;
  }
}