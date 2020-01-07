/**
 * @param {Object} context.route
 * @param {Function} context.redirect
 */
export default function({route, redirect}) {
  if (route.path.slice(-1) === '/' && route.path.length > 1) {
    const query = route.fullPath.slice(route.path.length);
    redirect(301, route.path.slice(0, -1) + query);
  }
}
