﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServiceAuto.API.Data;

namespace ServiceAuto.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200611201723_dbupdate1")]
    partial class dbupdate1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0");

            modelBuilder.Entity("ServiceAuto.API.Models.Comanda", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Completata")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Descriere")
                        .HasColumnType("TEXT");

                    b.Property<string>("NumarMasina")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("NumarTelefon")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("NumeClient")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("PostLucru")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Reclamatie")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Comenzi");
                });

            modelBuilder.Entity("ServiceAuto.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ComandaCurenta")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .HasColumnType("TEXT");

                    b.Property<int>("WorkingPlace")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
