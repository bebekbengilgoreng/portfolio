import { ArrowDownRight, ArrowUpRight, Download, Mail } from "lucide-react";
import Image from "next/image";

import { SiteNav } from "@/components/site-nav";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { portfolio } from "@/data/portfolio";
import dicomScreenshot from "@/dicom-screenshot.png";

function SectionIntro({ index, label, title, titleId }: { index: string; label: string; title: string; titleId: string }) {
  return <header className="section-intro"><p className="eyebrow"><span>{index}</span> /{label}</p><h2 id={titleId}>{title}</h2></header>;
}

function PlaceholderLink({ children }: { children: React.ReactNode }) {
  return <span className="placeholder-link" title="Link to be added">{children} <span aria-hidden="true">↗</span></span>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <SiteNav />
      <main>
        <section id="top" className="hero wrap" aria-labelledby="page-title">
          <p className="hero-rail" aria-hidden="true">PROFILE / 2026</p>
          <div className="hero-kicker"><span>Medicine</span><span>Software</span><span>Research</span></div>
          <div className="hero-copy">
            <p className="eyebrow">Jakarta / ID</p>
            <h1 id="page-title">{portfolio.person.name.replaceAll(" ", "\u00a0")}</h1>
            <p className="hero-title">{portfolio.person.title}</p>
          </div>
          <div className="hero-aside">
            <p>{portfolio.person.introduction}</p>
            <p className="profile-summary-label">At a glance</p>
            <dl className="identity-list">
              {portfolio.person.profileFacts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
            <div className="text-links" role="group" aria-label="Social links">
              {portfolio.person.links.map((link) => <a key={link.label} href={link.href} title={link.status} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{link.label}<ArrowUpRight aria-hidden="true" /></a>)}
            </div>
          </div>
          <a className="hero-scroll" href="#projects">Selected work <ArrowDownRight aria-hidden="true" /></a>
        </section>

        <section id="projects" className="section wrap" aria-labelledby="projects-title">
          <SectionIntro index="01" label="projects" title="Selected work" titleId="projects-title" />
          <div className="projects-index">
            {portfolio.projects.map((project) => project.featured ? (
              <SpotlightCard key={project.number} className="project-featured">
                <div className="project-number">{project.number}</div>
                <div className="project-copy">
                  <p className="project-context">{project.role} · {project.organization}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <dl className="project-meta">{project.metadata.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                  <div className="text-links"><a href={project.href} target="_blank" rel="noreferrer">Open viewer<ArrowUpRight aria-hidden="true" /></a><PlaceholderLink>Publication</PlaceholderLink></div>
                </div>
                <figure className="dicom-field">
                  <a href={dicomScreenshot.src} target="_blank" rel="noreferrer" aria-label="Open the full-resolution DICOM viewer interface screenshot">
                    <Image src={dicomScreenshot} alt="Cross-platform DICOM viewer showing axial, sagittal, and coronal CT views with AI-assisted organ segmentation" placeholder="blur" sizes="(max-width: 640px) calc(100vw - 3.2rem), (max-width: 900px) calc(100vw - 7rem), 46vw" />
                  </a>
                  <figcaption><span>Interface study · MPR / segmentation</span><span>Open full resolution ↗</span></figcaption>
                </figure>
              </SpotlightCard>
            ) : (
              <article className="project-row" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div><p className="project-context">{project.role} · {project.period}</p><h3>{project.title}</h3></div>
                <p>{project.description}</p><PlaceholderLink>Details</PlaceholderLink>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section wrap" aria-labelledby="experience-title">
          <SectionIntro index="02" label="experience" title="Experience index" titleId="experience-title" />
          <div className="experience-groups">
            {portfolio.experience.map((group, groupIndex) => (
              <div className="experience-group" key={group.group}>
                <h3><span>0{groupIndex + 1}</span>{group.group}</h3>
                <div>{group.items.map(([role, meta, description]) => <article className="experience-row" key={role}><p className="experience-meta">{meta}</p><h4>{role}</h4><p>{description}</p></article>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="research" className="section wrap" aria-labelledby="research-title">
          <SectionIntro index="03" label="research" title="Research record" titleId="research-title" />
          <SpotlightCard className="research-empty">
            <div><p className="eyebrow">Record awaiting public details</p><h3>Work in progress.</h3></div>
            <div className="research-note"><p>{portfolio.research.types.join(" · ")}</p></div>
            <div className="research-fields" role="list" aria-label="Future research entry fields">{portfolio.research.fields.map((field) => <span role="listitem" key={field}>{field}</span>)}</div>
          </SpotlightCard>
        </section>

        <section className="section wrap split-section" aria-label="Education and skills">
          <div>
            <SectionIntro index="04" label="education" title="Education" titleId="education-title" />
            <div className="education-record"><p>{portfolio.education.period}</p><h3>{portfolio.education.degree}</h3><p>{portfolio.education.school}<br />{portfolio.education.location}</p></div>
          </div>
          <div>
            <SectionIntro index="05" label="skills" title="Working knowledge" titleId="skills-title" />
            <div className="skills-matrix">{portfolio.skills.map(([group, items]) => <div key={group}><h3>{group}</h3><p>{items.join(" · ")}</p></div>)}</div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <p className="eyebrow">06 /contact</p>
            <div><h2 id="contact-title">Let&apos;s talk.</h2><p>For research, software, or collaboration.</p></div>
            <div className="contact-actions">
              <a href={`mailto:${portfolio.person.email}`}><Mail aria-hidden="true" />{portfolio.person.email}</a>
              <a href="/michiel-aelis-wijaya-cv.pdf" download><Download aria-hidden="true" />Download CV</a>
              <a href="https://www.linkedin.com/in/michiel-aelis/" target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight aria-hidden="true" /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub<ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap"><p>{portfolio.person.name}</p><p>© {new Date().getFullYear()} · Designed &amp; built by Michiel.</p></footer>
    </div>
  );
}
