import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MinePage } from '../pages/mine/mine';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {GameService} from "../services/game.service";
import {AccountService} from "../services/account.service";
import {ToastService} from "../services/toast.service";
import {HttpModule} from "@angular/http";
import {GameListPageModule} from "../pages/game-list/game-list.module";
import {RoomListPageModule} from "../pages/room-list/room-list.module";
import {PlatformService} from "../services/platform.service";
import {GameDetailPageModule} from "../pages/game-detail/game-detail.module";
import {RoomPreparePageModule} from "../pages/room-prepare/room-prepare.module";
import {SocketService} from "../services/socket.service";
import {GameCluePageModule} from "../pages/game/game-clue/game-clue.module";
import {GameMainPageModule} from "../pages/game/game-main/game-main.module";
import {GameSurveyPageModule} from "../pages/game/game-survey/game-survey.module";
import {GameItemListPageModule} from "../pages/game/game-item-list/game-item-list.module";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MinePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GameListPageModule,
    GameDetailPageModule,
    RoomListPageModule,
    RoomPreparePageModule,
    GameCluePageModule,
    GameMainPageModule,
    GameSurveyPageModule,
    GameItemListPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MinePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastService,
    AccountService,
    PlatformService,
    SocketService,
    GameService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
