FROM golang:1.15 as builder

WORKDIR /app

COPY main.go .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o print .

FROM scratch

COPY --from=builder /app/print /print

CMD ["/print"]