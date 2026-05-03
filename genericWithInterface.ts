interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface withoutBrand {
  heartRate: number;
  stopWatch: boolean;
}

interface withBrand {
  aiFeature: boolean;
  callSupport: boolean;
  cameraSupport: boolean;
  calculator: boolean;
}

const poorDeveloper: Developer<
  withoutBrand,
  {
    model: string;
    price: number;
  }
> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "hp",
    model: "D67",
    releasedYear: 2025,
  },
  smartWatch: {
    heartRate: 200,
    stopWatch: true,
  },
  bike: { model: "Yamaha", price: 223000 },
};

const richDeveloper: Developer<withBrand> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "hp",
    model: "D67",
    releasedYear: 2025,
  },
  smartWatch: {
    aiFeature: true,
    calculator: true,
    cameraSupport: false,
    callSupport: true,
  },
};
