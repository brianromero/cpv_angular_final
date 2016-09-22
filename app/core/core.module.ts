import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  HttpModule
} from '@angular/http';
import {
  CommonModule
} from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import {
  RouterModule
} from '@angular/router';
import {
  Header
} from './components/header/header.component';
import {
  Notifications
} from './components/notifications/notifications.component';
import {
  SidebarItems
} from './components/sidebar-items/sidebar-items.component';
import {
  Layout
} from './components/layout.component';
import {
  routing
} from './../routing';


const LAYOUT_COMPONENTS = [Header, Notifications, SidebarItems]

@NgModule({
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  declarations: [LAYOUT_COMPONENTS],
  exports:[LAYOUT_COMPONENTS]
})
export class CoreModule {}