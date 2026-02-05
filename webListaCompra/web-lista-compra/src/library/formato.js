"use strict";

export const formatearPrecio = (valor) => {
  if (valor === undefined || valor === null || isNaN(valor)) {
    return "0,00€";
  }

  return Number(valor).toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatearPeso = (valor) => {
  if (valor === undefined || valor === null || isNaN(valor)) {
    return "0,00";
  }
  return Number(valor).toLocaleString("es-ES", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const formatearFecha = () => {
  return new Date().toISOString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
