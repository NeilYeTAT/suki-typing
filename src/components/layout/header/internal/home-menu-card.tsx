import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Pause, RotateCcw, Settings } from 'lucide-react'

// TODO: 先不考虑复用, 样式暂无~
const HomeMenuCard = () => {
  return (
    <menu className="flex gap-4 font-semibold text-lg">
      <TooltipProvider skipDelayDuration={1000}>
        <Tooltip>
          <TooltipTrigger>展示词典名</TooltipTrigger>
          <TooltipContent>
            <p>切换词典</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Pause className="size-5" />
          </TooltipTrigger>
          <TooltipContent>
            <p>暂停</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <RotateCcw className="size-5" />
          </TooltipTrigger>
          <TooltipContent>
            <p>重新开始</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Settings className="size-5" />
          </TooltipTrigger>
          <TooltipContent>
            <p>设置</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </menu>
  )
}

export default HomeMenuCard
