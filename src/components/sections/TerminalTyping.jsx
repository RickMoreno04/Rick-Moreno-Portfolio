import { useState, useEffect } from 'react'

const commands = [
    { prompt: 'rick@devops:~$', cmd: 'docker ps --format "table {{.Names}}\t{{.Status}}"', output: 'NAMES               STATUS\napi-server          Up 2 days\nweb-frontend        Up 2 days' },
    { prompt: 'rick@devops:~$', cmd: 'docker build -t app:v2.1 .', output: 'Successfully built a3d8f2e1b4c7\nSuccessfully tagged app:v2.1' },
    { prompt: 'rick@devops:~$', cmd: 'aws ecs update-service --cluster prod --service api', output: 'service api deployment completed ✓' },
    { prompt: 'rick@devops:~$', cmd: 'gh workflow run deploy.yml --ref main', output: '✓ Created workflow_dispatch event' },
]

function TerminalTyping() {
    const [lines, setLines] = useState([])
    const [currentCmd, setCurrentCmd] = useState(0)
    const [currentChar, setCurrentChar] = useState(0)
    const [phase, setPhase] = useState('typing') // typing, output, pause

    useEffect(() => {
        if (currentCmd >= commands.length) {
            // Reset cycle
            const timer = setTimeout(() => {
                setLines([])
                setCurrentCmd(0)
                setCurrentChar(0)
                setPhase('typing')
            }, 3000)
            return () => clearTimeout(timer)
        }

        const cmd = commands[currentCmd]

        if (phase === 'typing') {
            if (currentChar < cmd.cmd.length) {
                const timer = setTimeout(() => {
                    setCurrentChar(prev => prev + 1)
                }, 30 + Math.random() * 40)
                return () => clearTimeout(timer)
            } else {
                const timer = setTimeout(() => setPhase('output'), 300)
                return () => clearTimeout(timer)
            }
        }

        if (phase === 'output') {
            setLines(prev => [
                ...prev,
                { type: 'command', prompt: cmd.prompt, text: cmd.cmd },
                { type: 'output', text: cmd.output },
            ])
            setPhase('pause')
        }

        if (phase === 'pause') {
            const timer = setTimeout(() => {
                setCurrentCmd(prev => prev + 1)
                setCurrentChar(0)
                setPhase('typing')
            }, 1200)
            return () => clearTimeout(timer)
        }
    }, [currentCmd, currentChar, phase])

    const activeCmd = currentCmd < commands.length ? commands[currentCmd] : null

    return (
        <div className="h-full overflow-hidden rounded-lg border border-slate-700/60 bg-[#0d0d14] font-mono text-xs sm:text-sm">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-slate-700/60 bg-[#111118] px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[10px] text-slate-500">rick@devops ~ zsh</span>
            </div>
            {/* Terminal body */}
            <div className="h-[240px] overflow-y-auto p-4 sm:h-[280px]">
                {lines.map((line, i) => (
                    <div key={i} className="mb-1">
                        {line.type === 'command' ? (
                            <div className="flex gap-2">
                                <span className="text-neon-green">{line.prompt}</span>
                                <span className="text-slate-300">{line.text}</span>
                            </div>
                        ) : (
                            <pre className="whitespace-pre-wrap text-slate-500">{line.text}</pre>
                        )}
                    </div>
                ))}
                {activeCmd && phase === 'typing' && (
                    <div className="flex gap-2">
                        <span className="text-neon-green">{activeCmd.prompt}</span>
                        <span className="text-slate-300">
                            {activeCmd.cmd.slice(0, currentChar)}
                            <span className="inline-block h-4 w-[2px] animate-pulse bg-neon-green" />
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TerminalTyping
