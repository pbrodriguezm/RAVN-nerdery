--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.24
-- Dumped by pg_dump version 12.2 (Ubuntu 12.2-2.pgdg16.04+1)

-- Started on 2021-03-23 16:55:46 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- TOC entry 182 (class 1259 OID 14977397)
-- Name: CLIENTS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CLIENTS" (
    id character varying(10) NOT NULL,
    name character varying,
    password character varying,
    state integer
);


ALTER TABLE public."CLIENTS" OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 14977415)
-- Name: LIKES; Type: TABLE; Schema: public; Owner: idem
--

CREATE TABLE public."LIKES" (
    id integer NOT NULL,
    idproduct uuid,
    idclient character varying(10),
    register timestamp without time zone
);


ALTER TABLE public."LIKES" OWNER TO idem;

--
-- TOC entry 2213 (class 0 OID 0)
-- Dependencies: 186
-- Name: TABLE "LIKES"; Type: COMMENT; Schema: public; Owner: idem
--

COMMENT ON TABLE public."LIKES" IS 'likes to producto from clients';


--
-- TOC entry 185 (class 1259 OID 14977413)
-- Name: LIKES_id_seq; Type: SEQUENCE; Schema: public; Owner: idem
--

CREATE SEQUENCE public."LIKES_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."LIKES_id_seq" OWNER TO idem;

--
-- TOC entry 2214 (class 0 OID 0)
-- Dependencies: 185
-- Name: LIKES_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: idem
--

ALTER SEQUENCE public."LIKES_id_seq" OWNED BY public."LIKES".id;


--
-- TOC entry 181 (class 1259 OID 14977389)
-- Name: PRODUCTS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PRODUCTS" (
    id uuid NOT NULL,
    name character varying,
    description character varying,
    image double precision,
    "create" timestamp without time zone
);


ALTER TABLE public."PRODUCTS" OWNER TO postgres;

--
-- TOC entry 184 (class 1259 OID 14977407)
-- Name: SALES; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SALES" (
    idproduct uuid,
    idclient character varying(8),
    quantity integer,
    register timestamp without time zone,
    amount numeric(10,2),
    id integer NOT NULL
);


ALTER TABLE public."SALES" OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 14977405)
-- Name: SALES_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."SALES_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SALES_id_seq" OWNER TO postgres;

--
-- TOC entry 2215 (class 0 OID 0)
-- Dependencies: 183
-- Name: SALES_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."SALES_id_seq" OWNED BY public."SALES".id;


--
-- TOC entry 2076 (class 2604 OID 14977418)
-- Name: LIKES id; Type: DEFAULT; Schema: public; Owner: idem
--

ALTER TABLE ONLY public."LIKES" ALTER COLUMN id SET DEFAULT nextval('public."LIKES_id_seq"'::regclass);


--
-- TOC entry 2075 (class 2604 OID 14977410)
-- Name: SALES id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SALES" ALTER COLUMN id SET DEFAULT nextval('public."SALES_id_seq"'::regclass);


--
-- TOC entry 2202 (class 0 OID 14977397)
-- Dependencies: 182
-- Data for Name: CLIENTS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CLIENTS" (id, name, password, state) FROM stdin;
\.


--
-- TOC entry 2206 (class 0 OID 14977415)
-- Dependencies: 186
-- Data for Name: LIKES; Type: TABLE DATA; Schema: public; Owner: idem
--

COPY public."LIKES" (id, idproduct, idclient, register) FROM stdin;
\.


--
-- TOC entry 2201 (class 0 OID 14977389)
-- Dependencies: 181
-- Data for Name: PRODUCTS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PRODUCTS" (id, name, description, image, "create") FROM stdin;
\.


--
-- TOC entry 2204 (class 0 OID 14977407)
-- Dependencies: 184
-- Data for Name: SALES; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SALES" (idproduct, idclient, quantity, register, amount, id) FROM stdin;
\.


--
-- TOC entry 2216 (class 0 OID 0)
-- Dependencies: 185
-- Name: LIKES_id_seq; Type: SEQUENCE SET; Schema: public; Owner: idem
--

SELECT pg_catalog.setval('public."LIKES_id_seq"', 1, false);


--
-- TOC entry 2217 (class 0 OID 0)
-- Dependencies: 183
-- Name: SALES_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."SALES_id_seq"', 1, false);


--
-- TOC entry 2080 (class 2606 OID 14977404)
-- Name: CLIENTS PK_CLIENT_ID; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CLIENTS"
    ADD CONSTRAINT "PK_CLIENT_ID" PRIMARY KEY (id);


--
-- TOC entry 2084 (class 2606 OID 14977420)
-- Name: LIKES PK_LIKES_PRODUCTOS; Type: CONSTRAINT; Schema: public; Owner: idem
--

ALTER TABLE ONLY public."LIKES"
    ADD CONSTRAINT "PK_LIKES_PRODUCTOS" PRIMARY KEY (id);


--
-- TOC entry 2078 (class 2606 OID 14977396)
-- Name: PRODUCTS PK_PRODUCTS_ID; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCTS"
    ADD CONSTRAINT "PK_PRODUCTS_ID" PRIMARY KEY (id);


--
-- TOC entry 2082 (class 2606 OID 14977412)
-- Name: SALES PK_SALES; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SALES"
    ADD CONSTRAINT "PK_SALES" PRIMARY KEY (id);


--
-- TOC entry 2085 (class 2606 OID 14977421)
-- Name: LIKES FK_CLIENTS_LIKES; Type: FK CONSTRAINT; Schema: public; Owner: idem
--

ALTER TABLE ONLY public."LIKES"
    ADD CONSTRAINT "FK_CLIENTS_LIKES" FOREIGN KEY (idclient) REFERENCES public."CLIENTS"(id) ON UPDATE CASCADE;


--
-- TOC entry 2086 (class 2606 OID 14977426)
-- Name: LIKES FK_PRODUCTS_LIKES; Type: FK CONSTRAINT; Schema: public; Owner: idem
--

ALTER TABLE ONLY public."LIKES"
    ADD CONSTRAINT "FK_PRODUCTS_LIKES" FOREIGN KEY (idproduct) REFERENCES public."PRODUCTS"(id) ON UPDATE CASCADE;


--
-- TOC entry 2212 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2021-03-23 16:55:46 -05

--
-- PostgreSQL database dump complete
--

