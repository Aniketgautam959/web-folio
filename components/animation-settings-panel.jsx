"use client"

import { useState } from "react"
import { Settings, X, Play, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAnimation } from "@/contexts/animation-context"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

export function AnimationSettingsPanel() {
  const { settings, updateSettings, applyPreset } = useAnimation()
  const [isOpen, setIsOpen] = useState(false)

  const togglePanel = () => {
    setIsOpen(!isOpen)
  }

  const easingOptions = [
    { value: "linear", label: "Linear" },
    { value: "ease", label: "Ease" },
    { value: "ease-in", label: "Ease In" },
    { value: "ease-out", label: "Ease Out" },
    { value: "ease-in-out", label: "Ease In Out" },
  ]

  const presetOptions = [
    { value: "subtle", label: "Subtle", icon: <span className="text-zinc-400">●</span> },
    { value: "moderate", label: "Moderate", icon: <span className="text-purple-400">●</span> },
    { value: "playful", label: "Playful", icon: <span className="text-purple-400">●</span> },
    { value: "dramatic", label: "Dramatic", icon: <span className="text-pink-400">●</span> },
    { value: "none", label: "None", icon: <span className="text-zinc-600">○</span> },
  ]

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        onClick={togglePanel}
        size="icon"
        className="rounded-full w-12 h-12 bg-zinc-800/80 dark:bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80 dark:hover:bg-zinc-700/80 shadow-lg"
        aria-label="Animation Settings"
      >
        <Settings className="h-5 w-5 text-purple-400 dark:text-purple-400" />
      </Button>

      {isOpen && (
        <Card className="absolute bottom-16 left-0 w-80 bg-zinc-900/95 dark:bg-zinc-900/95 backdrop-blur-md border-zinc-700 dark:border-zinc-700 shadow-xl rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium flex items-center text-black dark:text-white">
                <Zap className="w-4 h-4 mr-2 text-purple-400 dark:text-purple-400" />
                Animation Settings
              </h3>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
                onClick={togglePanel}
                aria-label="Close settings"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="animation-enabled" className="text-xs text-zinc-600 dark:text-zinc-400">
                    Animations Enabled
                  </Label>
                  <Switch
                    id="animation-enabled"
                    checked={settings.enabled}
                    onCheckedChange={(checked) => updateSettings({ enabled: checked })}
                  />
                </div>
              </div>

              {settings.enabled && (
                <>
                  <div className="space-y-4">
                    <Label className="text-xs text-zinc-600 dark:text-zinc-400">Animation Preset</Label>
                    <div className="grid grid-cols-5 gap-2">
                      {presetOptions.map((preset) => (
                        <Button
                          key={preset.value}
                          variant={settings.preset === preset.value ? "default" : "outline"}
                          size="sm"
                          className={`h-auto py-2 px-1 flex flex-col items-center justify-center text-xs ${
                            settings.preset === preset.value
                              ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50"
                              : "bg-zinc-200 dark:bg-zinc-800/50 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                          }`}
                          onClick={() => applyPreset(preset.value)}
                        >
                          <div className="mb-1">{preset.icon}</div>
                          {preset.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animation-duration" className="text-xs text-zinc-600 dark:text-zinc-400">
                        Duration: {settings.duration}ms
                      </Label>
                    </div>
                    <Slider
                      id="animation-duration"
                      min={200}
                      max={1500}
                      step={50}
                      value={[settings.duration]}
                      onValueChange={(value) => updateSettings({ duration: value[0] })}
                      className="py-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animation-delay" className="text-xs text-zinc-600 dark:text-zinc-400">
                        Delay Factor: {settings.delay}ms
                      </Label>
                    </div>
                    <Slider
                      id="animation-delay"
                      min={0}
                      max={300}
                      step={10}
                      value={[settings.delay]}
                      onValueChange={(value) => updateSettings({ delay: value[0] })}
                      className="py-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animation-intensity" className="text-xs text-zinc-600 dark:text-zinc-400">
                        Intensity: {Math.round(settings.intensity * 100)}%
                      </Label>
                    </div>
                    <Slider
                      id="animation-intensity"
                      min={0.1}
                      max={1}
                      step={0.05}
                      value={[settings.intensity]}
                      onValueChange={(value) => updateSettings({ intensity: value[0] })}
                      className="py-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="animation-easing" className="text-xs text-zinc-600 dark:text-zinc-400">
                      Easing Function
                    </Label>
                    <Select value={settings.easing} onValueChange={(value) => updateSettings({ easing: value })}>
                      <SelectTrigger
                        id="animation-easing"
                        className="bg-zinc-200 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-black dark:text-white"
                      >
                        <SelectValue placeholder="Select easing" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-200 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-black dark:text-white">
                        {easingOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">Preview</div>
                    <div className="grid grid-cols-3 gap-2">
                      {["fade-up", "slide-left", "zoom-in"].map((animationType) => (
                        <AnimationPreviewCard key={animationType} animationType={animationType} />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

function AnimationPreviewCard({ animationType }) {
  const [key, setKey] = useState(0)

  const resetAnimation = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <div className="relative">
      <div className="absolute -top-1 -right-1 z-10">
        <Button
          size="icon"
          variant="ghost"
          className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
          onClick={resetAnimation}
        >
          <Play className="h-3 w-3" />
        </Button>
      </div>
      <div className="h-20 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-md overflow-hidden">
        <AnimatedSection
          key={key}
          animation={animationType}
          className="h-full flex items-center justify-center"
          forceAnimate={true}
        >
          <div className="text-xs text-center">
            <div className="text-purple-400 dark:text-purple-400 mb-1">
              {animationType
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
