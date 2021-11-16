import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Angular11Component } from './angular11/angular11.component';
import { NextjsComponent } from './nextjs/nextjs.component';
import { NuxtjsComponent } from './nuxtjs/nuxtjs.component';
import { React16Component } from './react16/react16.component';
import { React17Component } from './react17/react17.component';
import { ViteComponent } from './vite/vite.component';
import { Vue2Component } from './vue2/vue2.component';
import { Vue3Component } from './vue3/vue3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'app-angular11',
    children: [{
      path: '**',
      component: Angular11Component
    }]
  },
  {
    path: 'app-nextjs',
    children: [{
      path: '**',
      component: NextjsComponent
    }]
  },
  {
    path: 'app-nuxtjs',
    children: [{
      path: '**',
      component: NuxtjsComponent
    }]
  },
  {
    path: 'app-react16',
    children: [{
      path: '**',
      component: React16Component
    }]
  },
  {
    path: 'app-react17',
    children: [{
      path: '**',
      component: React17Component
    }]
  },
  {
    path: 'app-vite',
    children: [{
      path: '**',
      component: ViteComponent
    }]
  },
  {
    path: 'app-vue2',
    children: [{
      path: '**',
      component: Vue2Component
    }]
  },
  {
    path: 'app-vue3',
    children: [{
      path: '**',
      component: Vue3Component
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // 设置主应用基础路由为main-angular11(用于后续部署)，则子应用基础路由(baseroute)为/main-angular11/xxx
  providers: [{ provide: APP_BASE_HREF, useValue: '/main-angular11'}]
})
export class AppRoutingModule { }
