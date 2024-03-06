function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export function stringUserAvatar(name) {
  return {
    sx: {
      fontWeight: 600,
      width: window.innerWidth < 768 ? 32 : 38,
      height: window.innerWidth < 768 ? 32 : 38,
      bgcolor: stringToColor(name),
      color: '#E1F0FA',
    },
    children: `${name.split(' ')[0][0].toUpperCase()}`,
  };
}

export function stringContactAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      fontWeight: 600,
      color: '#E1F0FA',
      width:
        window.innerWidth < 768
          ? 26
          : window.innerWidth >= 768 && window.innerWidth < 1440
          ? 28
          : 34,
      height:
        window.innerWidth < 768
          ? 26
          : window.innerWidth >= 768 && window.innerWidth < 1440
          ? 28
          : 34,
      fontSize: '14px',
    },
    children: `${name.split(' ')[0][0].toUpperCase()}`,
  };
}
