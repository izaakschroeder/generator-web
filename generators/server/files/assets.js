
import { readFileSync } from 'fs';
import path from 'path';

export function live() {
  let assets = { };

  process.on('assets', ([url, stats]) => {
    assets = collect(url, stats);
  });

  return function(req, res, next) {
    req.assets = assets;
    next();
  };
}

export function local() {
  const assets = collect(assetUrl, JSON.parse(readFileSync(path.join(
    assetPath, 'stats.json'
  ), 'utf8')));

  return function(req, res, next) {
    req.assets = assets;
  };
}

export default function() {
  return process.env.NODE_ENV !== 'production' ? live() : local();
}
