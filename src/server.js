import "dotenv/config";

import "./database";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import express from "express";

import UsersResource from './resources/UsersResource'
import SectorResource from './resources/SectorResource'
import ComputerResource from './resources/ComputerResource'
import ScannerResource from './resources/ScannerResource'
import ImpressoraResource from './resources/ImpressoraResource'
import NotebookResource from './resources/NotebookResource'



import User from "./models/user";

import locales from "./locales/locales";
import theme from "./components/Theme/theme";

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
  database: [],
    rootPath: '/admin',
    dashboard: {
        component: AdminJS.bundle("./components/Dashboard/index"), 
    },
    resources: [UsersResource, SectorResource, ComputerResource, ScannerResource, ImpressoraResource, NotebookResource],
    branding: {
        companyName: 'Inventário cerb',
        logo: false,
        softwareBrothers: false,
        theme
    },
    ...locales,
});

//const router = AdminJSExpress.buildRouter(adminJS);
const router = AdminJSExpress.buildAuthenticatedRouter(adminJS, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ where: { email } });

  if (user && (await user.checkPassword(password))) {
     return user;
    }

    return false;
  },
  cookiePassword: process.env.SECRET
});

app.use(adminJS.options.rootPath, router);
app.listen(process.env.PORT || 8080);
