// apps/lms-backend-api/src/types/express/index.d.ts

import type { User } from '../../models/User';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
