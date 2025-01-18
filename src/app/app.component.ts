import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: Title,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
        mergeMap(
          (data) =>
            this.activatedRoute.firstChild?.paramMap.pipe(
              map((params) => ({
                ...data,
                id: params.get('id'),
              })),
            ) || [],
        ),
      )
      .subscribe((data: { title?: string; id?: string | null }) => {
        const title = data.title
          ? data.id
            ? `${data.title} - ID: ${data.id}`
            : data.title
          : 'Default Title';
        this.titleService.setTitle(title);
      });
  }
}
