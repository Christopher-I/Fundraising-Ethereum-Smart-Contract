import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xc598268557b57125Cd992C5a68CB3110E746b46b'
);

export default instance;
