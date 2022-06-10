SYSTEM=arm64
build:
	cd deps/v8 && \
	./tools/dev/v8gen.py ${SYSTEM}.release.sample && \
	ninja -C out.gn/${SYSTEM}.release.sample v8_monolith


spectre:
	cd deps/v8 && \
	g++ -I. -Iinclude ../../src/spectre.cpp -o \
	spectre -lv8_monolith -Lout.gn/${SYSTEM}.release.sample/obj/ \
	-pthread -std=c++17 -DV8_COMPRESS_POINTERS && \
	./spectre