
import { readFileSync } from 'fs';
import path from 'path';

function json(file : String) : Object {
  return JSON.parse(readFileSync(file, 'utf8'));
}

export function live() : Function {
  let assets = { };

  process.on('assets', ([url, stats]) => {
    assets = collect(url, stats);
  });

  return function(req, res, next) {
    req.assets = assets;
    next();
  };
}

export function local() : Function {
  const assets = collect(assetUrl, json(path.join(
    assetPath, 'stats.json'
  )));

  return function(req, res, next) {
    req.assets = assets;
  };
}

export default function() : Function {
  return process.env.NODE_ENV !== 'production' && process.env.HOT ?
    live() : local();
}
