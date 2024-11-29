import { glob, copyFile, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const aexec = promisify(exec);
const __dirname = path.dirname(new URL(import.meta.url).pathname);

for await (const pkg of glob("../../packages/**/package.json", {
	exclude: (path) => path.includes("node_modules"),
})) {
	const package_dir = path.dirname(pkg);
	const package_name = path.basename(package_dir);

	// call `pnpm pack` in the package directory
	// and move the tarball to the root of the project
	// with the name `evidence-dev-<package_name>.tgz`

	await aexec("pnpm pack", { cwd: package_dir });

	const files = await readdir(package_dir);
	const tarball = files.filter((file) => file.endsWith(".tgz"))[0];
	if (tarball === undefined) {
		throw new Error(`Could not find tarball for ${package_name}`);
	}

	await copyFile(
		path.join(package_dir, tarball),
		path.join(__dirname, `evidence-dev-${package_name}.tgz`)
	);
	await rm(path.join(package_dir, tarball));
}
