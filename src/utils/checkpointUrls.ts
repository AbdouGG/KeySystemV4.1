import { LINKVERTISE_URLS } from './constants';
import { getHWID } from './hwid';

export const getCheckpointUrl = async (checkpoint: number): Promise<string> => {
  try {
    const hwid = getHWID();
    const baseUrl = LINKVERTISE_URLS[checkpoint as keyof typeof LINKVERTISE_URLS];
    
    // Append HWID to the Linkvertise URL
    const finalUrl = `${baseUrl}?hwid=${encodeURIComponent(hwid)}`;
    return finalUrl;
  } catch (error) {
    throw new Error('Please get the link from Roblox to continue.');
  }
};