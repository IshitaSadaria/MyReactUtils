export const formatDate = ( date, format = 'dd-MM-yyyy') => {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: format.includes("MMM") ? "short" : "2-digit",
        day: "2-digit",
    }).format(new Date(date));
};