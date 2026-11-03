import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet, type Routes } from "@angular/router";

import SignInScreen from "@/screens/sign-in.component";
import HomeScreen from "@/screens/home.component";
import FeedbackFormScreen from "@/screens/feedback-form.component";
import ReportScreen from "@/screens/report.component";
import CycleScreen from "@/screens/cycle.component";
import EmployeesScreen from "@/screens/employees.component";

/** The app's menu, drawn around every screen except the ones routed outside it. */
@Component({
  selector: "app-shell",
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="flex min-h-screen">
      <aside
        class="w-56 shrink-0 border-r p-4"
        style="background-color: var(--brand-surface); border-color: var(--brand-border)"
      >
        <p class="mb-4 px-3 text-sm font-semibold" style="font-family: var(--brand-font-heading)">
          performance management system
        </p>
        <nav aria-label="App menu" class="flex flex-col gap-1">
          <a
            routerLink="/home"
            routerLinkActive
            #link0="routerLinkActive"
            [class]="linkClass(link0.isActive)"
          >
            Home
          </a>
          <a
            routerLink="/feedback-form"
            routerLinkActive
            #link1="routerLinkActive"
            [class]="linkClass(link1.isActive)"
          >
            Give feedback
          </a>
          <a
            routerLink="/report"
            routerLinkActive
            #link2="routerLinkActive"
            [class]="linkClass(link2.isActive)"
          >
            Feedback report
          </a>
          <a
            routerLink="/cycle"
            routerLinkActive
            #link3="routerLinkActive"
            [class]="linkClass(link3.isActive)"
          >
            Cycle workspace
          </a>
          <a
            routerLink="/employees"
            routerLinkActive
            #link4="routerLinkActive"
            [class]="linkClass(link4.isActive)"
          >
            Employee directory
          </a>
        </nav>
      </aside>
      <main class="flex-1 overflow-auto">
        <router-outlet />
      </main>
    </div>
  `,
})
export class AppShellComponent {
  protected linkClass(active: boolean): string {
    return [
      "flex items-center gap-2 rounded-[var(--brand-radius)] px-3 py-2 text-sm font-medium transition-colors",
      active ? "bg-[var(--brand-hover)] text-[var(--brand-fg)]" : "text-[var(--brand-fg-muted)]",
    ].join(" ");
  }
}

// Screens shown before sign-in, or hidden from the menu, are routed outside it.
export const routes: Routes = [
  { path: "sign-in", component: SignInScreen },
  {
    path: "",
    component: AppShellComponent,
    children: [
      { path: "home", component: HomeScreen },
      { path: "feedback-form", component: FeedbackFormScreen },
      { path: "report", component: ReportScreen },
      { path: "cycle", component: CycleScreen },
      { path: "employees", component: EmployeesScreen },
    ],
  },
  { path: "**", redirectTo: "/sign-in" },
];

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {}
