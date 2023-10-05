import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/config'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export const getArtifact = async (type: string) => {
  const { data: artifact } = await supabase.storage
    .from('contracts')
    .download(`artifacts/${type}.json`)
  if (!artifact) throw new Error('Artifact not found.')

  return JSON.parse(await artifact.text())
}