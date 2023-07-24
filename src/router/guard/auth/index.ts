import type { Router } from 'vue-router';

/**
 * 认证守卫
 * @param router
 */
export function createAuthGuard(router: Router): void {
  router.beforeEach((to, _, next) => {
    next();
  });
}
