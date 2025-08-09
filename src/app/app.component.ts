import { Component } from '@angular/core';
import { LoadingService } from './common/service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-learn';
  isLoading: boolean = false;
  constructor(public loadingService: LoadingService) {
    this.loadingService.isLoading.subscribe((res) => {
      this.isLoading = res;
    });
  }
}
