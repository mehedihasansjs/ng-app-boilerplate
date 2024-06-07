import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {}
