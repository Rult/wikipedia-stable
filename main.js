const { host, pathname, search } = location;

if (pathname.startsWith("/wiki/")) {
    const params = new URLSearchParams(search);

    if (!params.has("stable")) {
        params.set("stable", 1);
        location.search = params;
    }
}
