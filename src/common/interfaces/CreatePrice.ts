export interface PriceInterface {
  from: From;
  to: To;
  serviceType: string;
  serviciosComplementarios: null;
  datosProducto: DatosProducto;
}

export interface DatosProducto {
  producto: string;
  familiaProducto: string;
  bultos: Bulto[];
}

export interface Bulto {
  largo: number;
  ancho: number;
  alto: number;
  pesoFisico: number;
  cantidad: number;
}

export interface From {
  country: string;
  district: string;
}

export interface To {
  country: string;
  state: number;
  district: string;
}
