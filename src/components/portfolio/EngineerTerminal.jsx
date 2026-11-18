import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, CornerDownLeft, Terminal } from 'lucide-react'
import Reveal from './Reveal'
import { biography, experience, learningFocus, profile, projects, skills } from '../../data/portfolio'

const shortcuts = ['help', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact']
const allowedCommands = new Set([
  ...shortcuts,
  'whoami', 'github', 'linkedin', 'resume', 'clear',
])

function EngineerTerminal() {
  const [input, setInput] = useState('')
  const [lines, setLines] = useState([])
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalOutput = useRef(null)

  useEffect(() => {
    if (lines.length && terminalOutput.current) {
      terminalOutput.current.scrollTop = terminalOutput.current.scrollHeight
    }
  }, [lines])

  const execute = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase()
    if (!allowedCommands.has(command)) {
      if (command) {
        setLines((current) => [...current, { command: rawCommand, output: `Command not found: ${command}. Type “help” to see the available commands.` }])
        setHistory((current) => [...current, rawCommand])
      }
      setInput('')
      setHistoryIndex(-1)
      return
    }

    if (command === 'clear') {
      setLines([])
      setHistory((current) => [...current, rawCommand])
      setInput('')
      setHistoryIndex(-1)
      return
    }

    const outputs = {
      help: `Available commands:\n${[...allowedCommands].sort().join('  ')}`,
      whoami: `${profile.name}\n${profile.role}`,
      about: biography,
      skills: skills.map((skill) => `${skill.name}: ${skill.tools.length ? skill.tools.join(', ') : 'No tools listed'}`).join('\n'),
      projects: projects.map((project) => `${project.number}  ${project.title}`).join('\n'),
      experience: experience.map((item) => `${item.period} · ${item.role} — ${item.company}`).join('\n'),
      certifications: `No completed certifications are listed. Current learning:\n${learningFocus.map((item) => `${item.title} — ${item.status}`).join('\n')}`,
      contact: `${profile.email}\nUse: mailto:${profile.email}`,
      github: `Opening GitHub profile: ${profile.github}`,
      linkedin: `Opening LinkedIn: ${profile.linkedin}`,
      resume: 'Opening the résumé PDF in a new tab.',
    }

    if (command === 'github') window.open(profile.github, '_blank', 'noopener,noreferrer')
    if (command === 'linkedin') window.open(profile.linkedin, '_blank', 'noopener,noreferrer')
    if (command === 'resume') window.open(profile.resume, '_blank', 'noopener,noreferrer')

    setLines((current) => [...current, { command: rawCommand, output: outputs[command] }])
    setHistory((current) => [...current, rawCommand])
    setInput('')
    setHistoryIndex(-1)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const next = Math.min(historyIndex + 1, history.length - 1)
      if (next >= 0) {
        setHistoryIndex(next)
        setInput(history[history.length - 1 - next])
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      const next = historyIndex - 1
      setHistoryIndex(next)
      setInput(next < 0 ? '' : history[history.length - 1 - next])
    }
  }

  return (
    <section id="terminal" className="section terminal-section">
      <div className="section-topline"><span>08 / INTERACTIVE</span><span>SAFE COMMAND ALLOWLIST</span></div>
      <Reveal className="terminal-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> OPTIONAL INTERFACE</p>
          <h2>Access the<br /><em>engineer.</em></h2>
        </div>
        <p className="section-intro">A small terminal for exploring my portfolio. Use a shortcut or type a command. Information is also available throughout the page.</p>
      </Reveal>
      <Reveal className="terminal-window" delay={0.08}>
        <div className="terminal-titlebar">
          <div className="terminal-lights"><i /><i /><i /></div>
          <span><Terminal size={13} /> rick@portfolio:~</span>
          <span className="terminal-title-status"><span className="status-dot" /> INTERACTIVE</span>
        </div>
        <div className="terminal-shortcuts" aria-label="Terminal command shortcuts">
          <span>QUICK COMMANDS</span>
          {shortcuts.map((command) => <button type="button" key={command} onClick={() => execute(command)}>{command}</button>)}
        </div>
        <div className="terminal-output" ref={terminalOutput} role="log" aria-live="polite" aria-label="Terminal output">
          <p className="terminal-welcome">Portfolio shell · Type <button type="button" onClick={() => execute('help')}>help</button> to begin.</p>
          {lines.map((line, index) => (
            <div className="terminal-result" key={`${line.command}-${index}`}>
              <p className="terminal-command-line"><b>rick@portfolio:~$</b> {line.command}</p>
              <pre>{line.output}</pre>
            </div>
          ))}
          <div className="terminal-input-row">
            <label htmlFor="portfolio-command">rick@portfolio:~$</label>
            <input
              id="portfolio-command"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' ? execute(input) : onKeyDown(event)}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck="false"
              aria-label="Enter a portfolio command"
            />
            <button type="button" className="terminal-submit" onClick={() => execute(input)} aria-label="Run command"><CornerDownLeft size={15} /></button>
          </div>
        </div>
        <div className="terminal-footnote"><span>↑ / ↓ COMMAND HISTORY</span><span>COMMANDS ARE PORTFOLIO-ONLY</span></div>
      </Reveal>
    </section>
  )
}

export default EngineerTerminal
