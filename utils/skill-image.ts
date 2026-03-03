// Network & Cloud skill icons only

import aws from "../public/svg/skills/aws.svg";
import gcp from "../public/svg/skills/gcp.svg";
import azure from "../public/svg/skills/azure.svg";
import digitalocean from "../public/svg/skills/digitalocean.svg";
import docker from "../public/svg/skills/docker.svg";
import kubernetes from "../public/svg/skills/kubernetes.svg";
import linux from "../public/svg/skills/linux.svg";
import nginx from "../public/svg/skills/nginx.svg";
import apache from "../public/svg/skills/apache.svg";
import cisco from "../public/svg/skills/cisco.svg";
import mikrotik from "../public/svg/skills/mikrotik.svg";
import juniper from "../public/svg/The Tech Stack/juniper.svg";
import ubiquiti from "../public/svg/skills/ubiquiti.svg";
import fortinet from "../public/svg/skills/fortinet.svg";
import pfsense from "../public/svg/skills/pfsense.svg";
import zabbix from "../public/svg/skills/zabbix.svg";
import prometheus from "../public/svg/skills/prometheus.svg";
import grafana from "../public/svg/skills/grafana.svg";
import cloudflare from "../public/svg/skills/cloudflare.svg";
import openvpn from "../public/svg/skills/openvpn.svg";

// 🔥 Map-based (clean & fast)
const skillIconMap: Record<string, any> = {
  aws,
  "amazon web services": aws,

  gcp,
  "google cloud": gcp,

  azure,
  "microsoft azure": azure,

  digitalocean,

  docker,

  kubernetes,
  k8s: kubernetes,

  linux,

  nginx,

  apache,

  cisco,

  mikrotik,

  juniper,
  "juniper networks": juniper,

  ubiquiti,

  fortinet,

  pfsense,

  zabbix,

  prometheus,

  grafana,

  cloudflare,

  openvpn,
};

export const skillsImage = (skill: string) => {
  const key = skill.toLowerCase();
  return skillIconMap[key] || linux; // safe fallback
};