create extension if not exists pgcrypto;

-- Navigation taxonomy runs table
create table nav_taxonomy_runs (
    id uuid primary key default gen_random_uuid(),
    created_at timestamptz not null default now(),
    source text not null default 'playwright_crawl',
    repo_commit_sha text null,
    taxonomy_version text null,
    env text not null default 'prod',
    notes text null
);

-- Navigation nodes table
create table nav_nodes (
    id uuid primary key default gen_random_uuid(),
    run_id uuid not null references nav_taxonomy_runs(id) on delete cascade,
    canonical_path text not null,
    breadcrumb_array text[] not null,
    menu_depth int not null,
    leaf boolean not null default false,
    url text null,
    url_prefix text null,
    url_pattern text null,
    selector_hints jsonb not null default '{}'::jsonb,
    elements jsonb not null default '{}'::jsonb,
    label text null,
    label_norm text null,
    created_at timestamptz not null default now()
);

-- Indexes for nav_nodes
create unique index idx_nav_nodes_run_path on nav_nodes(run_id, canonical_path);
create index idx_nav_nodes_breadcrumb_array on nav_nodes using gin(breadcrumb_array);
create index idx_nav_nodes_canonical_path on nav_nodes(canonical_path);
create index idx_nav_nodes_url_prefix on nav_nodes(url_prefix);
create index idx_nav_nodes_label_norm on nav_nodes(label_norm);
