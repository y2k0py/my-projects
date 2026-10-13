const flags = {
    Lithuania: (
        <svg viewBox="0 0 15 9" aria-hidden="true" className="h-2.5 w-4 shrink-0 rounded-[1px] ring-1 ring-white/30">
            <rect width="15" height="3" fill="#FDB913" />
            <rect y="3" width="15" height="3" fill="#006A44" />
            <rect y="6" width="15" height="3" fill="#C1272D" />
        </svg>
    ),
    Poland: (
        <svg viewBox="0 0 8 5" aria-hidden="true" className="h-2.5 w-4 shrink-0 rounded-[1px] ring-1 ring-white/30">
            <rect width="8" height="2.5" fill="#FFFFFF" />
            <rect y="2.5" width="8" height="2.5" fill="#DC143C" />
        </svg>
    ),
};

const CountryLabel = ({ country }) => {
    if (!country) {
        return null;
    }

    return (
        <span className="inline-flex items-center gap-1">
            {flags[country]}
            <span>{country}</span>
        </span>
    );
};

export default CountryLabel;
