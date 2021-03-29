
--
-- Name: CLIENTS;  
--

CREATE TABLE public."CLIENTS" (
    id character varying(10) NOT NULL,
    name character varying,
    password character varying,
    state integer
);


ALTER TABLE public."CLIENTS" OWNER TO postgres;

--
-- Name: LIKES;   
--

CREATE TABLE public."LIKES" (
    id integer NOT NULL,
    idproduct uuid,
    idclient character varying(8),
    register timestamp without time zone
);


ALTER TABLE public."LIKES" OWNER TO idem;

--
-- Name: TABLE "LIKES";  My commentssss 
--

COMMENT ON TABLE public."LIKES" IS 'likes to producto from clients';


--
-- Name: LIKES_id_seq;  
--

CREATE SEQUENCE public."LIKES_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."LIKES_id_seq" OWNER TO idem;

--
-- Name: LIKES_id_seq; 
--

ALTER SEQUENCE public."LIKES_id_seq" OWNED BY public."LIKES".id;


--
-- Name: PRODUCTS; 
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
-- Name: SALES
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
-- Name: SALES_id_seq; 
--

CREATE SEQUENCE public."SALES_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SALES_id_seq" OWNER TO postgres;

--
-- Name: SALES_id_seq; 
--

ALTER SEQUENCE public."SALES_id_seq" OWNED BY public."SALES".id;


--
-- Name: LIKES id;
--

ALTER TABLE ONLY public."LIKES" ALTER COLUMN id SET DEFAULT nextval('public."LIKES_id_seq"'::regclass);


--
-- Name: SALES 
--

ALTER TABLE ONLY public."SALES" ALTER COLUMN id SET DEFAULT nextval('public."SALES_id_seq"'::regclass);


--
-- Data for Name: CLIENTS; TABLE DATA; Schema: 
--

COPY public."CLIENTS" (id, name, password, state) FROM stdin;



--
-- Data for Name: LIKES; TABLE DATA; Schema:  
--

COPY public."LIKES" (id, idproduct, idclient, register) FROM stdin;



--
-- Data for Name: PRODUCTS; TABLE DATA; Schema: 
--

COPY public."PRODUCTS" (id, name, description, image, "create") FROM stdin;



--

-- Data for Name: SALES; TABLE DATA; Schema: 
--

COPY public."SALES" (idproduct, idclient, quantity, register, amount, id) FROM stdin;



--
-- Name: LIKES_id_seq; SEQUENCE SET; Schema:  
--

SELECT pg_catalog.setval('public."LIKES_id_seq"', 1, false);




SELECT pg_catalog.setval('public."SALES_id_seq"', 1, false);


ALTER TABLE ONLY public."CLIENTS"
    ADD CONSTRAINT "PK_CLIENT_ID" PRIMARY KEY (id);


--
-- Name: LIKES PK_LIKES_PRODUCTOS; CONSTRAINT; Schema:  
--

ALTER TABLE ONLY public."LIKES"
    ADD CONSTRAINT "PK_LIKES_PRODUCTOS" PRIMARY KEY (id);


--
-- Name: PRODUCTS PK_PRODUCTS_ID; CONSTRAINT; Schema: 
--

ALTER TABLE ONLY public."PRODUCTS"
    ADD CONSTRAINT "PK_PRODUCTS_ID" PRIMARY KEY (id);


--
-- Name: SALES PK_SALES; CONSTRAINT; Schema: 
--

ALTER TABLE ONLY public."SALES"
    ADD CONSTRAINT "PK_SALES" PRIMARY KEY (id);


--
-- Name: LIKES FK_CLIENTS_LIKES; FK CONSTRAINT; Schema:  
--

ALTER TABLE ONLY public."LIKES"
    ADD CONSTRAINT "FK_CLIENTS_LIKES" FOREIGN KEY (idclient) REFERENCES public."CLIENTS"(id) ON UPDATE CASCADE;


--
-- Name: LIKES FK_PRODUCTS_LIKES; FK CONSTRAINT; Schema:  
--

ALTER TABLE ONLY public."LIKES"
    ADD CONSTRAINT "FK_PRODUCTS_LIKES" FOREIGN KEY (idproduct) REFERENCES public."PRODUCTS"(id) ON UPDATE CASCADE;


