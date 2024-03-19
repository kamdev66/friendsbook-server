import express, { Express } from 'express';
import { FriendsBookServer } from '@root/setupServer';
import databaseConnection from '@root/setupDatabase';
import { config } from './config';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: FriendsBookServer = new FriendsBookServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
