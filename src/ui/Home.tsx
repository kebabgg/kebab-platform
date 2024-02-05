import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          An open source, decentralized casino built on Gamba.
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          Welcome
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://discord.gg/kebab"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Discord
          </Button>
        </div>
      </Section>
    </div>
  )
}
