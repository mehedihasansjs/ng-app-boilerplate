import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TenantService } from '@core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TenantService]
})
export class AppComponent implements OnInit {
  constructor(
    private tenantService: TenantService,
  ) {
  }

  ngOnInit() {
    this.tenantService.getByDomain()
      .pipe()
      .subscribe();
  }
}
