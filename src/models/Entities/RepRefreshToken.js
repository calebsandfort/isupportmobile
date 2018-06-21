//@flow
import EntityBase from './entityBase';

export class RepRefreshToken extends EntityBase {
  refreshTokenId: string;
  subject: string;
  protectedTicket: string;

  static fromApiEntity(apiRepRefreshToken:RepRefreshTokenType): RepRefreshToken {
    let repRefreshToken = new RepRefreshToken();
    repRefreshToken.id = apiRepRefreshToken.id;
    repRefreshToken.refreshTokenId = apiRepRefreshToken.refreshTokenId;
    repRefreshToken.subject = apiRepRefreshToken.subject;
    repRefreshToken.protectedTicket = apiRepRefreshToken.protectedTicket;

    return repRefreshToken;
  }
}

export default RepRefreshToken;

export type RepRefreshTokenType = {
  id: number,
  refreshTokenId: string;
  subject: string;
  protectedTicket: string;
}

