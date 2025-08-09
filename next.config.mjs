/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { withPlausibleProxy } from "next-plausible";

/** @type {import("next").NextConfig} */
const nextConfig = {};

export default withPlausibleProxy()(nextConfig);
