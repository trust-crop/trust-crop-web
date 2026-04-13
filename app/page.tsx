'use client'

import {
  SubNav,
  Hero,
  Section,
  SectionIntro,
  Grid,
  Pillar,
  River,
  Heading,
  Text,
  Link,
  Image,
  MinimalFooter,
  PricingOptions,
  Statistic,
  AnimationProvider,
  Animate,
} from "@primer/react-brand";
import content from "./content/el.json";

const { nav, hero, features, howItWorks, stats, pricing, footer } = content;

export default function Home() {
  return (
    <div className="px-4">
      {/* ── Navigation ── */}
      <SubNav>
        <SubNav.Heading href="/">
          <Image src="/tc-logo.svg" alt="TrustCrop" width={45} height={45} />
        </SubNav.Heading>
        <SubNav.Link href="#features">{nav.features}</SubNav.Link>
        <SubNav.Link href="#how-it-works">{nav.howItWorks}</SubNav.Link>
        <SubNav.Link href="#pricing">{nav.pricing}</SubNav.Link>
        <SubNav.Link href="https://github.com/trustcrop">{nav.github}</SubNav.Link>
        <SubNav.Action href="#get-started">{nav.getStarted}</SubNav.Action>
      </SubNav>

      {/* ── Hero ── */}
      <Hero align="center" enableAnimation>
        <Hero.Label>{hero.label}</Hero.Label>
        <Hero.Heading>
          {hero.heading[0]}
          <br />
          {hero.heading[1]}
        </Hero.Heading>
        <Hero.Description>{hero.description}</Hero.Description>
        <Hero.PrimaryAction href="#get-started">{hero.primaryAction}</Hero.PrimaryAction>
        <Hero.SecondaryAction href="https://github.com/trustcrop">
          {hero.secondaryAction}
        </Hero.SecondaryAction>
      </Hero>

      {/* ── Feature pillars ── */}
      <Section id="features" backgroundColor="subtle">
        <AnimationProvider animationTrigger="on-visible" runOnce>
          <SectionIntro align="center" fullWidth animate="fade-in">
            <SectionIntro.Heading>{features.sectionIntro.heading}</SectionIntro.Heading>
            <SectionIntro.Description>{features.sectionIntro.description}</SectionIntro.Description>
          </SectionIntro>

          <Grid enableGutters>
            {features.pillars.map((pillar, i) => (
              <Grid.Column
                key={pillar.heading}
                span={{ xsmall: 12, medium: 6, large: 4 }}
              >
                <Pillar animate={{ variant: "slide-in-up", delay: i * 150 }}>
                  <Pillar.Heading>{pillar.heading}</Pillar.Heading>
                  <Pillar.Description>{pillar.description}</Pillar.Description>
                </Pillar>
              </Grid.Column>
            ))}
          </Grid>
        </AnimationProvider>
      </Section>

      {/* ── River sections ── */}
      <Section id="how-it-works">
        <AnimationProvider animationTrigger="on-visible" runOnce visibilityOptions="bottom-of-screen">
          <River>
            <River.Visual>
              <Animate animate="slide-in-right">
                <div style={{ height: 340, borderRadius: 12, background: "linear-gradient(135deg, #0d1117 0%, #161b22 40%, #1f2d3d 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#58a6ff" strokeWidth="1.5" />
                    <path d="M3 9h18M9 3v18" stroke="#58a6ff" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </Animate>
            </River.Visual>
            <River.Content>
              <Heading as="h3" animate="slide-in-up">{howItWorks.rivers[0].heading}</Heading>
              <Text animate={{ variant: "slide-in-up", delay: 100 }}>{howItWorks.rivers[0].body}</Text>
              <Animate animate={{ variant: "fade-in", delay: 200 }}>
                <Link href="#get-started">{howItWorks.rivers[0].link}</Link>
              </Animate>
            </River.Content>
          </River>

          <River align="end">
            <River.Visual>
              <Animate animate="slide-in-left">
                <div style={{ height: 340, borderRadius: 12, background: "linear-gradient(135deg, #0d1117 0%, #1a1a2e 40%, #16213e 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="#3fb950" strokeWidth="1.5" />
                    <path d="M8 12l3 3 5-5" stroke="#3fb950" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Animate>
            </River.Visual>
            <River.Content>
              <Heading as="h3" animate="slide-in-up">{howItWorks.rivers[1].heading}</Heading>
              <Text animate={{ variant: "slide-in-up", delay: 100 }}>{howItWorks.rivers[1].body}</Text>
              <Animate animate={{ variant: "fade-in", delay: 200 }}>
                <Link href="#get-started">{howItWorks.rivers[1].link}</Link>
              </Animate>
            </River.Content>
          </River>

          <River>
            <River.Visual>
              <Animate animate="slide-in-right">
                <div style={{ height: 340, borderRadius: 12, background: "linear-gradient(135deg, #0d1117 0%, #1a1a2e 40%, #0f3460 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#d2a8ff" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#d2a8ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Animate>
            </River.Visual>
            <River.Content>
              <Heading as="h3" animate="slide-in-up">{howItWorks.rivers[2].heading}</Heading>
              <Text animate={{ variant: "slide-in-up", delay: 100 }}>{howItWorks.rivers[2].body}</Text>
              <Animate animate={{ variant: "fade-in", delay: 200 }}>
                <Link href="#get-started">{howItWorks.rivers[2].link}</Link>
              </Animate>
            </River.Content>
          </River>
        </AnimationProvider>
      </Section>

      {/* ── Social proof stats ── */}
      <Section backgroundColor="subtle">
        <AnimationProvider animationTrigger="on-visible" runOnce autoStaggerChildren staggerDelayIncrement={120}>
          <Grid enableGutters>
            {stats.map((stat) => (
              <Grid.Column
                key={stat.label}
                span={{ xsmall: 6, medium: 3 }}
              >
                <Animate animate="scale-in-up">
                  <Statistic>
                    <Statistic.Heading>{stat.value}</Statistic.Heading>
                    <Statistic.Description>{stat.label}</Statistic.Description>
                  </Statistic>
                </Animate>
              </Grid.Column>
            ))}
          </Grid>
        </AnimationProvider>
      </Section>

      {/* ── Pricing ── */}
      <Section id="pricing">
        <AnimationProvider animationTrigger="on-visible" runOnce>
          <SectionIntro align="center" fullWidth animate="fade-in">
            <SectionIntro.Label>{pricing.sectionIntro.label}</SectionIntro.Label>
            <SectionIntro.Heading>{pricing.sectionIntro.heading}</SectionIntro.Heading>
            <SectionIntro.Description>{pricing.sectionIntro.description}</SectionIntro.Description>
          </SectionIntro>

          <PricingOptions variant="cards-gradient" align="center">
            {pricing.plans.map((plan, i) => (
              <PricingOptions.Item
                key={plan.heading}
                animate={{ variant: "slide-in-up", delay: i * 120 }}
              >
                <PricingOptions.Label color={plan.label.color as "blue" | "green" | "purple"}>
                  {plan.label.text}
                </PricingOptions.Label>
                <PricingOptions.Heading>{plan.heading}</PricingOptions.Heading>
                <PricingOptions.Description>{plan.description}</PricingOptions.Description>
                <PricingOptions.Price
                  currencyCode=""
                  currencySymbol={plan.price.symbol ?? ""}
                  trailingText={plan.price.trailing}
                >
                  {plan.price.value}
                </PricingOptions.Price>
                <PricingOptions.FeatureList hasDivider>
                  {[
                    <PricingOptions.FeatureListHeading key="heading">
                      {plan.featureListHeading}
                    </PricingOptions.FeatureListHeading>,
                    ...plan.included.map((item) => (
                      <PricingOptions.FeatureListItem key={item}>
                        {item}
                      </PricingOptions.FeatureListItem>
                    )),
                    ...plan.excluded.map((item) => (
                      <PricingOptions.FeatureListItem key={`x-${item}`} variant="excluded">
                        {item}
                      </PricingOptions.FeatureListItem>
                    )),
                  ]}
                </PricingOptions.FeatureList>
                <PricingOptions.PrimaryAction as="a" href={plan.primaryAction.href}>
                  {plan.primaryAction.text}
                </PricingOptions.PrimaryAction>
                {"secondaryAction" in plan && plan.secondaryAction && (
                  <PricingOptions.SecondaryAction as="a" href={plan.secondaryAction.href}>
                    {plan.secondaryAction.text}
                  </PricingOptions.SecondaryAction>
                )}
              </PricingOptions.Item>
            ))}
          </PricingOptions>

          <PricingOptions.Footnote>{pricing.footnote}</PricingOptions.Footnote>
        </AnimationProvider>
      </Section>

      {/* ── Footer ── */}
      <MinimalFooter
        socialLinks={false}
        copyrightStatement={
          <>
            {footer.copyright.replace("{year}", String(new Date().getFullYear()))}{" "}
            <MinimalFooter.Link href={footer.license.href}>
              {footer.license.text}
            </MinimalFooter.Link>
            .
          </>
        }
      >
        {footer.links.map((link) =>
          link.external ? (
            <MinimalFooter.Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.text}
            </MinimalFooter.Link>
          ) : (
            <MinimalFooter.Link key={link.href} href={link.href}>
              {link.text}
            </MinimalFooter.Link>
          )
        )}
      </MinimalFooter>
    </div>
  );
}
