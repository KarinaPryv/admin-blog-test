import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './pages/blog/blog.component';
import { AdminComponent } from './admin/admin.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'blog', component: AdminBlogComponent },
    { path: '', pathMatch: 'full', redirectTo: 'blog'  }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
