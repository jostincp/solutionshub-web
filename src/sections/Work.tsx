import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { site, type Dict } from '../i18n/dictionaries';
import { FadeIn } from '../components/FadeIn';

type CaseId = 'smartsavings' | 'automation' | 'custom';

const META: Record<CaseId, { stack: string[]; href: string; external: boolean; accent: string }> = {
  smartsavings: {
    stack: [
      'n8n',
      'WhatsApp Business API',
      'Telegram',
      'Gemini 2.5 Flash',
      'Whisper',
      'DeepSeek',
      'PostgreSQL',
      'Supabase',
    ],
    href: site.smartsavings,
    external: true,
    accent: '#7FBDA3',
  },
  automation: {
    stack: ['n8n', 'Python', 'FastAPI', 'WhatsApp Cloud API', 'Webhooks', 'LLMs', 'PostgreSQL', 'CRMs'],
    href: '#contact',
    external: false,
    accent: '#38BDF8',
  },
  custom: {
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Cloudflare'],
    href: '#contact',
    external: false,
    accent: '#A78BFA',
  },
};

export function Work({ dict }: { dict: Dict }) {
  const cases: CaseId[] = ['smartsavings', 'automation', 'custom'];

  return (
    <section id="work" className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <span className="eyebrow text-accent">{dict.work.eyebrow}</span>
          <h2 className="display-heading text-5xl sm:text-6xl md:text-7xl mt-4 mb-5 max-w-[16ch]">
            {dict.work.title}
          </h2>
          <p className="text-fg-muted text-[15px] sm:text-base leading-relaxed max-w-2xl">
            {dict.work.subtitle}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-10">
          {cases.map((id, i) => (
            <CaseCard key={id} id={id} index={i} total={cases.length} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  id,
  index,
  total,
  dict,
}: {
  id: CaseId;
  index: number;
  total: number;
  dict: Dict;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const data = dict.work.items[id];
  const meta = META[id];

  return (
    <div ref={ref} className="relative h-auto lg:h-[92vh] flex items-start justify-center">
      <motion.article
        style={{ scale, top: `calc(5.25rem + ${index * 20}px)` }}
        className="lg:sticky w-full rounded-[28px] sm:rounded-[40px] border border-line-strong bg-bg-elev overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
      >
        <div className="grid lg:grid-cols-12">
          {/* Contenido */}
          <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-fg-dim">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span
                className="rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-wider"
                style={{ color: meta.accent, background: `${meta.accent}18` }}
              >
                {data.tag}
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-fg tracking-tight mb-4">
              {data.name}
            </h3>

            <p className="text-[15px] sm:text-base text-fg-muted leading-relaxed mb-6 max-w-xl">
              {data.summary}
            </p>

            <ul className="flex flex-col gap-2.5 mb-7 border-t border-line pt-5">
              {data.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[13.5px] sm:text-sm text-fg-muted leading-relaxed">
                  <span
                    aria-hidden
                    className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full"
                    style={{ background: meta.accent }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 mb-6">
              {meta.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-fg-dim"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={meta.href}
              target={meta.external ? '_blank' : undefined}
              rel={meta.external ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-2 self-start rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
            >
              {meta.external ? dict.work.visit : dict.work.discuss}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Visual: diagrama de arquitectura vivo */}
          <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[360px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-line bg-[#0C0C0E] flex flex-col">
            <div className="flex-1 flex items-center justify-center p-8">
              {id === 'smartsavings' && <SmartSavingsDiagram />}
              {id === 'automation' && <AutomationDiagram />}
              {id === 'custom' && <CloudArchDiagram />}
            </div>
            <div className="border-t border-line px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-fg-dim">
              {data.metric}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function SmartSavingsDiagram() {
  const inputs = [
    { label: 'TEXTO', model: 'DeepSeek' },
    { label: 'VOZ', model: 'Whisper' },
    { label: 'FACTURA', model: 'Gemini 2.5' },
  ];
  const A = '#7FBDA3';

  return (
    <svg
      viewBox="0 0 320 256"
      className="w-full max-w-[320px] h-auto"
      role="img"
      aria-label="Arquitectura de SmartSavings: texto, voz y foto de factura hacia n8n, WhatsApp API y PostgreSQL en Supabase"
    >
      {[50, 160, 270].map((x, i) => {
        const d = `M${x},52 C${x},74 160,80 160,104`;
        return (
          <g key={`i${i}`}>
            <path d={d} fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
            <path
              d={d}
              fill="none"
              stroke={A}
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={100}
              className="beam"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          </g>
        );
      })}

      <path d="M160,162 L160,198" fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
      <path
        d="M160,162 L160,198"
        fill="none"
        stroke={A}
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={100}
        className="beam"
        style={{ animationDelay: '1.5s' }}
      />

      {inputs.map((inp, i) => {
        const x = i * 110;
        return (
          <g key={inp.label}>
            <rect
              x={x}
              y="0"
              width="100"
              height="52"
              rx="13"
              fill="#111113"
              stroke="rgba(232,236,240,0.10)"
            />
            <text
              x={x + 50}
              y="22"
              textAnchor="middle"
              className="font-mono"
              fontSize="8.5"
              letterSpacing="1.2"
              fill="#8E969F"
            >
              {inp.label}
            </text>
            <text x={x + 50} y="38" textAnchor="middle" className="font-mono" fontSize="9" fill={A}>
              {inp.model}
            </text>
          </g>
        );
      })}

      <rect
        x="36"
        y="104"
        width="248"
        height="58"
        rx="16"
        fill="#141416"
        stroke="rgba(127,189,163,0.34)"
      />
      <text
        x="160"
        y="126"
        textAnchor="middle"
        className="font-mono"
        fontSize="8"
        letterSpacing="1.6"
        fill="#5C636B"
      >
        ORQUESTADOR · RETRIES
      </text>
      <text x="160" y="146" textAnchor="middle" className="font-display" fontSize="13" fill="#E8ECF0">
        n8n · WhatsApp Cloud API
      </text>

      <rect
        x="36"
        y="198"
        width="248"
        height="46"
        rx="13"
        fill="#111113"
        stroke="rgba(232,236,240,0.10)"
      />
      <text x="160" y="218" textAnchor="middle" className="font-mono" fontSize="10" fill="#8E969F">
        PostgreSQL · Supabase
      </text>
      <text x="160" y="234" textAnchor="middle" className="font-mono" fontSize="8" fill="#5C636B">
        12 categorías · cierre diario 9 PM
      </text>
    </svg>
  );
}

function AutomationDiagram() {
  const sources = [
    { label: 'CRM / ERP', sub: 'REST API' },
    { label: 'WHATSAPP', sub: 'Cloud API' },
    { label: 'WEBHOOKS', sub: 'Eventos' },
  ];
  const A = '#38BDF8';

  return (
    <svg
      viewBox="0 0 320 256"
      className="w-full max-w-[320px] h-auto"
      role="img"
      aria-label="Arquitectura de automatización B2B: CRM, WhatsApp y Webhooks hacia n8n y Python, conectando agentes IA y bases de datos"
    >
      {[50, 160, 270].map((x, i) => {
        const d = `M${x},50 C${x},72 160,76 160,100`;
        return (
          <g key={`s${i}`}>
            <path d={d} fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
            <path
              d={d}
              fill="none"
              stroke={A}
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={100}
              className="beam"
              style={{ animationDelay: `${i * 0.45}s` }}
            />
          </g>
        );
      })}

      {[76, 244].map((x, i) => {
        const d = `M160,158 C160,178 ${x},178 ${x},200`;
        return (
          <g key={`o${i}`}>
            <path d={d} fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
            <path
              d={d}
              fill="none"
              stroke={A}
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={100}
              className="beam"
              style={{ animationDelay: `${1.3 + i * 0.4}s` }}
            />
          </g>
        );
      })}

      {sources.map((src, i) => {
        const x = i * 110;
        return (
          <g key={src.label}>
            <rect
              x={x}
              y="0"
              width="100"
              height="50"
              rx="13"
              fill="#111113"
              stroke="rgba(232,236,240,0.10)"
            />
            <text
              x={x + 50}
              y="21"
              textAnchor="middle"
              className="font-mono"
              fontSize="8.5"
              letterSpacing="1"
              fill="#8E969F"
            >
              {src.label}
            </text>
            <text x={x + 50} y="37" textAnchor="middle" className="font-mono" fontSize="8.5" fill={A}>
              {src.sub}
            </text>
          </g>
        );
      })}

      <rect
        x="36"
        y="100"
        width="248"
        height="58"
        rx="16"
        fill="#141416"
        stroke="rgba(56,189,248,0.34)"
      />
      <text
        x="160"
        y="122"
        textAnchor="middle"
        className="font-mono"
        fontSize="8"
        letterSpacing="1.6"
        fill="#5C636B"
      >
        ORQUESTACIÓN B2B
      </text>
      <text x="160" y="142" textAnchor="middle" className="font-display" fontSize="13" fill="#E8ECF0">
        n8n · Python / FastAPI
      </text>

      {[
        { x: 0, title: 'Agentes IA', sub: 'LLMs · NLP · OCR' },
        { x: 168, title: 'Datos & Alertas', sub: 'SQL · Logs · CRM' },
      ].map((d) => (
        <g key={d.title}>
          <rect
            x={d.x}
            y="200"
            width="152"
            height="46"
            rx="13"
            fill="#111113"
            stroke="rgba(232,236,240,0.10)"
          />
          <text x={d.x + 76} y="220" textAnchor="middle" className="font-mono" fontSize="9.5" fill="#8E969F">
            {d.title}
          </text>
          <text x={d.x + 76} y="235" textAnchor="middle" className="font-mono" fontSize="8" fill="#5C636B">
            {d.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

function CloudArchDiagram() {
  const nodes = [
    { name: 'auth', sub: 'JWT / RLS' },
    { name: 'api', sub: 'REST / WS' },
    { name: 'workers', sub: 'Jobs / ETL' },
  ];
  const A = '#A78BFA';

  return (
    <svg
      viewBox="0 0 320 256"
      className="w-full max-w-[320px] h-auto"
      role="img"
      aria-label="Arquitectura cloud modular: Cloudflare y Web sobre contenedores Docker, PostgreSQL y Redis"
    >
      {[50, 160, 270].map((x, i) => {
        const d = `M160,48 C160,70 ${x},70 ${x},94`;
        return (
          <g key={`ct${i}`}>
            <path d={d} fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
            <path
              d={d}
              fill="none"
              stroke={A}
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={100}
              className="beam"
              style={{ animationDelay: `${i * 0.45}s` }}
            />
          </g>
        );
      })}

      {[76, 244].map((x, i) => {
        const d = `M160,154 C160,176 ${x},176 ${x},200`;
        return (
          <g key={`cb${i}`}>
            <path d={d} fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
            <path
              d={d}
              fill="none"
              stroke={A}
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={100}
              className="beam"
              style={{ animationDelay: `${1.2 + i * 0.4}s` }}
            />
          </g>
        );
      })}

      <rect
        x="48"
        y="0"
        width="224"
        height="48"
        rx="14"
        fill="#141416"
        stroke="rgba(167,139,250,0.34)"
      />
      <text
        x="160"
        y="19"
        textAnchor="middle"
        className="font-mono"
        fontSize="8"
        letterSpacing="1.5"
        fill="#5C636B"
      >
        EDGE · HTTPS · ZERO TRUST
      </text>
      <text x="160" y="36" textAnchor="middle" className="font-display" fontSize="12.5" fill="#E8ECF0">
        Cloudflare · React / Next.js
      </text>

      {nodes.map((n, i) => {
        const x = i * 110;
        return (
          <g key={n.name}>
            <rect
              x={x}
              y="94"
              width="100"
              height="60"
              rx="13"
              fill="#111113"
              stroke={i === 1 ? 'rgba(167,139,250,0.32)' : 'rgba(232,236,240,0.10)'}
            />
            <text x={x + 50} y="119" textAnchor="middle" className="font-mono" fontSize="10" fill="#E8ECF0">
              {n.name}
            </text>
            <text x={x + 50} y="136" textAnchor="middle" className="font-mono" fontSize="8.5" fill="#5C636B">
              {n.sub}
            </text>
          </g>
        );
      })}

      {[
        { x: 0, label: 'PostgreSQL', sub: 'Persistencia' },
        { x: 168, label: 'Redis · Docker', sub: 'Caché & CI/CD' },
      ].map((d) => (
        <g key={d.label}>
          <rect
            x={d.x}
            y="200"
            width="152"
            height="46"
            rx="13"
            fill="#111113"
            stroke="rgba(232,236,240,0.10)"
          />
          <text x={d.x + 76} y="220" textAnchor="middle" className="font-mono" fontSize="9.5" fill="#8E969F">
            {d.label}
          </text>
          <text x={d.x + 76} y="235" textAnchor="middle" className="font-mono" fontSize="8" fill="#5C636B">
            {d.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
