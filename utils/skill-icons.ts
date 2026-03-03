import {
  SiAmazon,
  SiGooglecloud,
  SiDigitalocean,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiApache,
  SiCisco,
  SiMikrotik,
  SiJunipernetworks,
  SiUbiquiti,
  SiFortinet,
  SiPfsense,
  SiPrometheus,
  SiGrafana,
  SiCloudflare,
  SiOpenvpn,
} from "react-icons/si";

import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "amazon web services":
      return SiAmazon;

    case "google cloud":
      return SiGooglecloud;

    case "digitalocean":
      return SiDigitalocean;

    case "docker":
      return SiDocker;

    case "kubernetes":
      return SiKubernetes;

    case "linux":
      return SiLinux;

    case "nginx":
      return SiNginx;

    case "apache":
      return SiApache;

    case "cisco":
      return SiCisco;

    case "mikrotik":
      return SiMikrotik;

    case "juniper networks":
      return SiJunipernetworks;

    case "ubiquiti":
      return SiUbiquiti;

    case "fortinet":
      return SiFortinet;

    case "pfsense":
      return SiPfsense;

    case "zabbix":
      return SiLinux; // No Zabbix icon, fallback to Linux or another suitable icon

    case "prometheus":
      return SiPrometheus;

    case "grafana":
      return SiGrafana;

    case "cloudflare":
      return SiCloudflare;

    case "openvpn":
      return SiOpenvpn;

    default:
      return SiLinux; // Safe default
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "aws":
      return "#ff9900";

    case "google cloud":
      return "#4285f4";

    case "azure":
      return "#0078d4";

    case "digitalocean":
      return "#0080ff";

    case "docker":
      return "#2496ed";

    case "kubernetes":
      return "#326ce5";

    case "linux":
      return "#facc15";

    case "nginx":
      return "#009639";

    case "apache":
      return "#d22128";

    case "cisco":
      return "#1ba0d7";

    case "mikrotik":
      return "#ff2e2e";

    case "juniper":
    case "juniper networks":
      return "#00a982";

    case "ubiquiti":
      return "#0559c9";

    case "fortinet":
      return "#ee3124";

    case "pfsense":
      return "#212121";

    case "prometheus":
      return "#e6522c";

    case "grafana":
      return "#f46800";

    case "cloudflare":
      return "#f38020";

    case "openvpn":
      return "#ea7e20";

    default:
      return "#ffffff";
  }
};