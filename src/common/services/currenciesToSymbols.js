const currencies = {
  EUR: "€",
};

function currencyToSymbol(currencyToSymbolize) {
  if (!currencyToSymbolize) {
    return;
  }

  return currencies[currencyToSymbolize]
    ? currencies[currencyToSymbolize]
    : currencyToSymbolize;
}

export default currencyToSymbol;
